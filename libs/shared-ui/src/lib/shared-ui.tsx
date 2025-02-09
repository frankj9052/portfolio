// import styles from './shared-ui.module.css'
import {Button} from '@heroui/react'

export function SharedUi() {
  return (
    <div>
      <h1>Welcome to SharedUi!</h1>
      <p
        className='bg-red-200 cursor-pointer'
      >Hello, world!</p>
      <Button
        color='primary'
        variant='solid'
      >Test Button</Button>
    </div>
  );
}

export default SharedUi;
