import { useState } from 'react';
import './App.css'
import Radio from './Radio'
import RadioGroup from './RadioGroup'

function App() {
  const [selectedItem, setSelectedItem] = useState('');

  return (
    <div className='flex flex-col gap-y-6'>
      <div className='self-center'>
        <Radio id='radio1' label='Radio 1' defaultChecked />
        <Radio id='radio2' label='Radio 2' defaultChecked={false} />
        <Radio id='radio3' label='Radio 3 (disabled)' defaultChecked disabled />
        <Radio id='radio4' label='Radio 4 (disabled)' defaultChecked={false} disabled />
      </div>
      <div className='self-center'>
        <div>The radio group</div>
        <div>Selected item: {selectedItem}</div>
        <RadioGroup
          defaultChecked='second'
          name="test"
          onChange={(itemValue) => setSelectedItem(itemValue)}
          options={[
            { label: 'Item First', value: 'first' },
            { label: 'Item Second', value: 'second' },
            { label: 'Item Third', value: 'third' }
          ]}
        />
      </div>
    </div>
  )
}

export default App
