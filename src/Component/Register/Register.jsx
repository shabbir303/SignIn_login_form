import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../../firebase.config";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    

  const [registerError, setRegisterError] = useState('');
  const[registerSuccess, setRegisterSuccess] =useState('');
  const[showPassword, setShowPassword]= useState(false);
  const[accepted, setAccepted] = useState(false);
    const handleRegister = e =>{
      

     e.preventDefault();
     console.log('submit')
     const Name= e.target.name.value
     const Email = e.target.email.value;
     const Password = e.target.password.value;
     const Accepted = e. target.terms.checked;
     //target means form ke vujano
     console.log(Email, Password, Name, Accepted);
      

    setRegisterError('');
    setRegisterSuccess('');
    //  create user
    createUserWithEmailAndPassword(auth, Email, Password, Name )
    .then(result=>{
     const User = result.user;
    //  console.log(user)

     sendEmailVerification(result.user)
     .then(()=>{
      toast('verify your email address')
    })
    .catch(error=>{
     console.log(error)
    })

    updateProfile(result.user,{
     displayName: Name, photoURL:"https://example.com/jane-q-user/profile.jpg"
    })
    .then(()=>{
     console.log('profile created successfull');
    })
    .catch(error=>{
    console.log(error);
    })


     setRegisterSuccess('User Created Successfully')
    })
    .catch(error=>{ 
      
      console.log(error)
      setRegisterError(error.message);
    })
    if(Password.length <6 ){
      setRegisterError('Password should be 6 character or longer')
      return
    }
    else if(!/[A-Z]/.test(Password)){
      // regEx search in google or chatgpt
      setRegisterError('Your password should have at least 1 uppercase letter')
      return
    }
    else if(!accepted){
     setRegisterError('Please accepted our terms and condition');
     return
    }

    }
    // const signIn = ()=>{
    //  location.replace('http://localhost:5173/login');
    // }

    return (
        <div className="flex felx-col items-center justify-center mx-auto">
            <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
  <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    Sign Up
  </h4>
  <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
    Enter your details to register.
  </p>
  <form onSubmit={handleRegister} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
    <div className="mb-4 flex flex-col gap-6">
      <div className="relative h-11 w-full min-w-[200px]">
        <input
          className=" h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeHolder=" " name="name"
        />
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Name
        </label>
      </div>
      <div className="relative h-11 w-full min-w-[200px]">
        <input
          className=" h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeHolder=" " name='email' type="email" required
        />
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Email
        </label>
      </div>
      <div className="relative h-11 w-full min-w-[200px]">
        <input
          type={showPassword?"text":'password' }
          className=" h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeHolder=" " name="password" required
        />
        <span onClick={()=>setShowPassword(!showPassword) } ><div className="w-[20px] h-[20px] absolute top-[10px] right-[8px] ">
        {!showPassword?
         <img src="/public/eye icon.png" alt="" srcset=""  />: <img src="/public/eyeslash.png" alt="" srcset="" />
        } 
          </div></span>
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Password
        </label>
      </div>
    </div>
    <div className="inline-flex items-center">
      <label
        className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
        htmlFor="checkbox"
        data-ripple-dark="true"
      >
        <input onClick={()=>setAccepted(accepted) }
          type="checkbox" name='terms'
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
          id="checkbox"
        />
        <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      <label
        className="mt-px cursor-pointer select-none font-light text-gray-700"
        htmlFor="checkbox"
      >
        <p className="flex items-center font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
          I agree the
          <a
            className="font-medium transition-colors hover:text-pink-500"
            href="#"
          >
            &nbsp;Terms and Conditions
          </a>
        </p>
      </label>
    </div>
    <input type="submit" value="Register " 
      className="mt-6 block w-full select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
     
      data-ripple-light="true"
      />
     
    <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      Already have an account?
      <NavLink to ='/login'><a 
        className="font-medium text-pink-500 transition-colors hover:text-blue-700"
        href="#" 
      >
        Login
      </a></NavLink>
    </p>
  </form>
  {    registerSuccess? <div className="btn btn-outline btn-success">{registerSuccess} </div>
       :registerError &&  <div className="btn btn-outline btn-error" > {registerError} </div>
      }
      <div className="flex justify-center items-center text-center mx-auto">
      <ToastContainer />
      </div>
</div>
     
        </div>
        
    );
};

export default Register;