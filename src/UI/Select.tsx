'use client'

import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import {Ctegories} from "../data"
import { ICategory } from '../Interfaces'

interface IProps {
    selected: ICategory
    setSelected: (category: ICategory) => void

}

 const Select = ({selected, setSelected} : IProps) => {
  

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Label className="block text-sm font-medium leading-6 text-gray-900">Assigned to</Label>
      <div className="relative mt-2">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
          <span className="flex items-center">
            <img alt="" src={selected.imgURL} className="h-5 w-5 flex-shrink-0 rounded-full" />
            <span className="ml-3 block truncate">{selected.name}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          </span>
        </ListboxButton>

        <ListboxOptions
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
            {Ctegories.map((category) => (
            <ListboxOption
                key={category.id}
                value={category}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
                >
                <div className="flex items-center">
                    <img alt="" src={category.imgURL} className="h-5 w-5 flex-shrink-0 rounded-full" />
                    <span className="ml-3 block truncate font-normal">
                        {category.name}
                    </span>
                </div>

                {selected === category && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
      )}
    </ListboxOption>
  ))}
</ListboxOptions>

      </div>
    </Listbox>
  )
}
export default Select
