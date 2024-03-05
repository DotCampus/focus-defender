import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "~/components/ui/dialog"
import React, { useState } from 'react'

import { Button } from '~components/ui/button'
import { Input } from '~components/ui/input'
import { daysOfTheWeek } from "constants/daysOfTheWeek"

export default function Schedule() {
  const [scheduleName, setScheduleName] = useState<string>("")
  const [selectedDays, setSelectedDays] = useState<string[]>([])

  const handleChange = (event) => {
    // handles input change
    setScheduleName(event.target.value)
  }
  const handleOnChange = (event) => {
    const isChecked = event.target.checked;
    const value = event.target.value;
    if(isChecked){
        setSelectedDays([...selectedDays, value]);
    }else{
        let index = selectedDays.indexOf(event.target.value);
        selectedDays.splice(index, 1);
        setSelectedDays([...selectedDays ]);
    }

  }

  const handleCancel = () => {
    setScheduleName("")
    setSelectedDays([])
   
  }
  function handleClick(): void {
    alert(`created ${scheduleName} and ${selectedDays}`)
  }

  

  return (
    <div className="mt-10 ">
      <h3 className="text-xl font-bold mt-2">Schedule</h3>
      <div className="flex w-full justify-between">
        <div className="items-center bg-[#b6bedf] px-5 w-[50%] p-2 mt-6 rounded-md">
          <div>
            <p className="text-sm font-bold my-5">Serious Mode</p>
          </div>

        </div>
        <Dialog >
          <DialogTrigger>
            <Button variant="menu" className="py-6 px-8" onClick={handleCancel}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M31.6668 21.6634H21.6668V31.6634H18.3335V21.6634H8.3335V18.3301H18.3335V8.33008H21.6668V18.3301H31.6668V21.6634Z"
                  fill="currentColor"
                />
              </svg>
              Schedule
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Schedule</DialogTitle>
            </DialogHeader>
            <Input
              type="type"
              id="scheduleName"
              value={scheduleName}
              onChange={handleChange}
              placeholder="Add Schedule Name"
              className="my-[60px] w-[90%]"
            />

            <div className="flex mb-5 my-auto">
              {
                daysOfTheWeek.map((day, index) => (
                   <div className="ml-2" key={day.abbr}>
  <input type="checkbox"  onChange={(event) => handleOnChange(event)} id={day.day}  className="peer hidden" value={day.day} />
  <label htmlFor={day.day} className="cursor-pointer rounded-lg border-2 border-primary hover:bg-accent hover:text-accent-foreground
   py-3 px-4 font-bold text-gray-700 transition-colors duration-200 ease-in-out peer-checked:bg-primary  peer-checked:text-primary-foreground"> {day.abbr}</label>
</div>
                ))
              }
           
            </div>
            <DialogFooter>
            <DialogClose >
                <Button
                  variant="outline"
                  onClick={handleCancel}
                  className="mr-3 border-2 border-primary">
                  Cancel
                </Button>
                <Button onClick={handleClick}>Save</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
    
  )
}
