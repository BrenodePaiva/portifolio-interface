import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'
import { Button, Description, Image, SerachBox } from './styled'
import api from '../../../services/api'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { useNavigate } from 'react-router-dom'
import Path from '../../../constants/Path'
import { LoadingSpinner } from '../../../components/LoadingSpinner'
import { toast } from 'react-toastify'

function ProjectsList() {
  const [projects, setProjects] = useState([])
  const [pagination, setPagination] = useState()
  const [page, setPage] = useState(0)
  const [pageTable, setPageTable] = useState(1)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [reload, setReload] = useState(false)
  const navigate = useNavigate()

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
    setPageTable(newPage + 1)
  }

  const handleChangeSearch = event => {
    setSearch(event.target.value)
  }

  const editProject = dados => {
    navigate(Path.projUpdate, { state: { dados } })
  }

  const deletPoject = async id => {
    await toast.promise(api.delete(`projects/${id}`), {
      pending: 'Excluindo Projeto...',
      success: 'Projeto excluido',
      error: 'Falha ao excluir o Projeto'
    })

    setTimeout(() => {
      setReload(!reload)
    }, 500)
  }

  useEffect(() => {
    async function loadProjects() {
      if (search.length == 0) {
        const { data } = await api.get(
          `projects?page=${pageTable}&search=${search}`
        )

        setProjects(data.projects)
        setPagination(data.pagination)
      } else if (search.length > 2) {
        const { data } = await api.get(
          `projects?page=${pageTable}&search=${search}`
        )

        setProjects(data.projects)
        setPagination(data.pagination)
      }
    }

    loadProjects()
  }, [pageTable, search, reload])

  const columns = [
    { id: 'path', label: 'Imagem', minWidth: 200, align: 'center' },
    { id: 'name', label: 'Name', minWidth: 170, align: 'left' },
    { id: 'category', label: 'Categoria', minWidth: 100, align: 'left' },
    { id: 'description', label: 'Descrição', minWidth: 170, align: 'left' },
    { id: 'edit_delet', label: '', minWidth: 100, align: 'center' }
  ]

  function createData(id, path, name, category, description, edit_delet) {
    return { id, path, name, category, description, edit_delet }
  }

  const rows = projects.map(project =>
    createData(
      project.id,
      <>
        {!loading && <LoadingSpinner size={50} />}
        <Image src={project.url} onLoad={() => setLoading(true)} />
      </>,
      project.name,
      project.category?.name,
      <Description>{project.description}</Description>,
      <>
        <EditIcon
          onClick={() => editProject(project)}
          color="action"
          style={{ cursor: 'pointer', marginRight: 6 }}
        />
        <DeleteForeverIcon
          onClick={() => deletPoject(project.id)}
          style={{ cursor: 'pointer', color: 'red' }}
        />
      </>
    )
  )

  return (
    <>
      {!rows.length && <LoadingSpinner size={120} />}
      {rows.length > 0 && (
        <Paper sx={{ width: '100%', overflow: 'hidden', height: '100%' }}>
          <SerachBox>
            <form>
              <SearchIcon className="search-icon" color="action" />
              <input
                type="text"
                onChange={handleChangeSearch}
                required
                placeholder="Search..."
              />
            </form>

            <Button onClick={() => navigate(Path.projCreate)}>
              <AddIcon style={{ marginRight: '5px' }} />
              Novo Projeto
            </Button>
          </SerachBox>

          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map(column => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map(column => {
                        const value = row[column.id]
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
          {pagination && (
            <TablePagination
              rowsPerPageOptions={[pagination?.limit]}
              component="div"
              count={pagination?.total}
              rowsPerPage={pagination?.limit}
              page={page}
              onPageChange={handleChangePage}
            />
          )}
        </Paper>
      )}
    </>
  )
}

export default ProjectsList
