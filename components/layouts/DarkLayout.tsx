
import {FC,PropsWithChildren} from 'react'

export const DarkLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(0,0,0,0.3)',
      borderRadius: '5px',
      padding: '10px',
    }}>
      <h1>Dark Layout</h1>
      <div>
        {children}
      </div>

    </div>
  )
}
