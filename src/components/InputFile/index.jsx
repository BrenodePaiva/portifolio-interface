import { SvgIcon } from '@mui/material'
import { LabelFile } from './styled'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage } from '../ErrorMessage'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'

export function InputFile({ value, children, ...props }) {
  return (
    <>
      <LabelFile htmlFor="upload" {...props}>
        {children}
        <CloudUploadOutlinedIcon style={{ marginRight: 10 }} />
        {/* <SvgIcon style={{ marginRight: '10px' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
        </SvgIcon> */}

        <p>{value}</p>
      </LabelFile>
    </>
  )
}

InputFile.propTypes = {
  value: PropTypes.string,
  children: PropTypes.object
}
