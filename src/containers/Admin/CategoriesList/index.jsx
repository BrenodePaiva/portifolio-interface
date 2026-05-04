import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { Button, SerachBox } from './styled'
import api from '../../../services/api'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { useNavigate } from 'react-router-dom'
import Path from '../../../constants/Path'
import { LoadingSpinner } from '../../../components/LoadingSpinner'
import { toast } from 'react-toastify'

function CategoriesList() {
  const [categories, setCategories] = useState([])
  const [reload, setReload] = useState(false)
  const navigate = useNavigate()

  const editCategory = dados => {
    navigate(Path.catUpdate, { state: { dados } })
  }

  const deletCategory = async id => {
    try {
      await toast.promise(api.delete(`categories/${id}`), {
        pending: 'Excluindo Categoria...',
        success: 'Categoria excluida',
        error: 'Falha ao excluir a Categoria'
      })

      setTimeout(() => {
        setReload(!reload)
      }, 500)
    } catch (error) {
      if (
        error.response.data.error.name === 'SequelizeForeignKeyConstraintError'
      ) {
        toast.error(
          'Error: Esta categoria possui produtos associados e não pode ser excluída.'
        )
      } else {
        toast.error(error)
      }
    }
  }

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      setCategories(data)
    }

    loadCategories()
  }, [reload])

  const columns = [
    { id: 'name', label: 'Name', minWidth: 170, align: 'left' },
    { id: 'edit_delet', label: '', minWidth: 100, align: 'center' }
  ]

  function createData(id, name, edit_delet) {
    return { id, name, edit_delet }
  }

  const rows = categories.map(category =>
    createData(
      category.id,
      category.name,
      <>
        <EditIcon
          onClick={() => editCategory(category)}
          color="action"
          style={{ cursor: 'pointer', marginRight: 6 }}
        />
        <DeleteForeverIcon
          onClick={() => deletCategory(category.id)}
          style={{ cursor: 'pointer', color: 'red' }}
        />
      </>
    )
  )

  return (
    <>
      {!rows.length && <LoadingSpinner size={120} />}
      {rows.length > 0 && (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <SerachBox>
            <Button onClick={() => navigate(Path.catCreate)}>
              <AddIcon style={{ marginRight: '5px' }} />
              Nova Categoria
            </Button>
          </SerachBox>

          <TableContainer sx={{ maxHeight: 440 }}>
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
        </Paper>
      )}
    </>
  )
}

export default CategoriesList
