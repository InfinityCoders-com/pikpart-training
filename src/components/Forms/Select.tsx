import { SearchSelect } from '@icstark/ui'
import React from 'react'

function Select(props: any) {
  const SearchNSelect: any = SearchSelect
  return (
    <div>
      <SearchNSelect
        options={props.options}
        value={props.value}
        onBlur={props.onBlur}
        isMulti={props.isMulti}
        onChange={props.onChange}
        placeholder={props.placeholder}
        filterOption={props.filterOption}
        styles={{
          container: (base: any) => ({
            ...base,
            flexGrow: 1
          }),
          control: (base: any) => ({
            ...base,
            borderColor: '#b3b3b3',
            boxShadow: 'none'
          }),
          option: (base: any) => ({
            ...base,
            display: 'flex',
            justifyContent: 'space-between',
            zIndex: 10
          })
        }}
        getOptionLabel={props.getOptionLabel}
        getOptionValue={props.getOptionValue}
        {...props}
      />
    </div>
  )
}

export default Select
