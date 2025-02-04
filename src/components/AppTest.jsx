import { useState } from 'react'
import TableRow from './TableRow'
const AppTest = () => {
  const [studentData, setStudentData] = useState([])

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  // Query State
  const [query, setQuery] = useState('')


  function formSubmitHandler(e) {
    e.preventDefault()
    setStudentData([...studentData, { firstName: firstName.toLowerCase(), lastName: lastName.toLowerCase(), email: email.toLowerCase() }])

    // Clean state
    setFirstName('')
    setLastName('')
    setEmail('')
  }

  function doesObjectContain(student) {
    const { firstName, lastName, email } = student;
    return [firstName, lastName, email].some(item => item.toLowerCase().includes(query))
  }


  return (
    <>
      <form className='mx-auto max-w-[350px]' onSubmit={formSubmitHandler}>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col '><label htmlFor="">First Name</label><input type="text" className='border' value={firstName} required onChange={(e) => setFirstName(e.target.value)} /></div>
          <div className='flex flex-col '><label htmlFor="">Last Name</label><input type="text" className='border' value={lastName} required onChange={(e) => setLastName(e.target.value)} /></div>
          <div className='flex flex-col '><label htmlFor="">Email</label><input type="text" className='border' value={email} required onChange={(e) => setEmail(e.target.value)} /></div>
        </div>
        {/* Submit Button */}
        <button type='submit' className='bg-purple-500 text-white mt-10 px-3 py-2 rounded-md font-bold'>Submit</button>
      </form>

      <div>
        <div className='flex gap-6 flex-row my-5'>
          <h2 className='text-xl font-semibold'>Student Data</h2>
          <input type="text" placeholder='Search first name from list' className='w-50 px-3' value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <table>
          <thead>
            <tr>
              <th className='pl-5'>#</th>
              <th className='px-5'>First Name</th>
              <th className='px-5'>Last Name</th>
              <th className='px-5'>Email</th>
            </tr>
          </thead>
          <tbody>
            {studentData.filter(doesObjectContain).map(function (student, index) {
              return <TableRow key={index} index={index} student={student} />
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AppTest