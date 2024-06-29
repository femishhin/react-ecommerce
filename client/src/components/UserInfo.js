import React, { useState } from 'react';

export default function UserInfo() {
    const [form, setform] = useState({
        fname: '',
        lname: '',
        email:'',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipcode:'',        
    });

    const userformChange = (e) => {
        const{ name, value } = e.target;
        setform({ ...form, [name]:value });
    }

    const userformSubmit = (e) => {
        e.preventDefault();
        console.log('User Details:', form);
    }

  return (
    <form className='card' onSubmit={userformSubmit}>
        <div className='card-body'>
            <h4 className='mb-3'>User Information</h4>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='mb-3'>
                        <label>FIRST NAME</label>
                        <input type='text' className='form-control' name='fname' value={form.fname} onChange={userformChange} required />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='mb-3'>
                        <label>LAST NAME</label>
                        <input type='text' className='form-control' name='lname' value={form.lname} onChange={userformChange} required />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='mb-3'>
                        <label>EMAIL</label>
                        <input type='text' className='form-control' name='email' value={form.email} onChange={userformChange} required />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='mb-3'>
                        <label>PHONE</label>
                        <input type='text' className='form-control' name='phone'  value={form.phone} onChange={userformChange} required />
                    </div>
                </div>
                <div className='col-md-12'>
                    <div className='mb-3'>
                        <label>ADDRESS</label>
                        <input type='text' className='form-control' name='address' value={form.address} onChange={userformChange} required  />
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='mb-3'>
                        <label>CITY</label>
                        <input type='text' className='form-control' name='city' value={form.city} onChange={userformChange} required  />
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='mb-3'>
                        <label>STATE</label>
                        <input type='text' className='form-control' name='state' value={form.state} onChange={userformChange} required  />
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='mb-3'>
                        <label>ZIP/POSTAL CODE</label>
                        <input type='text' className='form-control' name='zipcode' value={form.zipcode} onChange={userformChange} required  />
                    </div>
                </div>
                <div className='col-md-12'>
                    <div className='mb-3'>
                        <label>COUNTRY</label>
                        <select className='form-control'  >
                            <option></option>
                            <option>Select1</option>
                            <option>Select2</option>
                            <option>Select3</option>
                        </select>
                    </div>
                </div>
            </div>  
            {/* <button type="submit" className="btn btn-primary">Submit</button> */}
        </div>
    </form>
  )
}
