import PropTypes from 'prop-types'
import { useState } from 'react'
import eyeShow from '/icons/eye_open.svg'
import eyeHide from '/icons/eye_close.svg'
import { motion } from 'framer-motion'

const AuthInput = ({ label, type, register, name, placeholder, errors, registerOptions }) => {
   const [showPassword, setShowPassword] = useState(false)

   const togglePasswordVisibility = () => {
      setShowPassword(prev => !prev)
   }

   return (
      <div className='block w-full'>
         <label htmlFor={name} className='block mb-2 ml-6 size-[16px] leading-[16px] whitespace-nowrap'>
            {label}
         </label>
         <div className='relative'>
            <input
               className='w-full rounded-[32px] py-5 pl-6 pr-20 outline-none border-none placeholder:text-[#B2B2B2] placeholder:text-[14px] leading-[16px]'
               type={showPassword && type === 'password' ? 'text' : type}
               id={name}
               placeholder={placeholder}
               {...register(name, registerOptions)}
               autoComplete={type === 'password' ? 'new-password' : 'off'}
            />
            {type === 'password' && (
               <button
                  className='absolute -translate-y-1/2 top-1/2 right-6 w-[24px] h-[24px]'
                  type='button'
                  onClick={togglePasswordVisibility}
               >
                  <motion.img
                     className='w-[24px] h-[24px]'
                     whileHover={{ scale: 1.2 }}
                     whileTap={{ scale: 0.9 }}
                     src={showPassword ? eyeShow : eyeHide}
                     alt='Toggle password visibility'
                  />
               </button>
            )}
         </div>
         {errors[name] && <span className='ml-6 text-red-500 opacity-[0.7] text-[12px]'>{errors[name].message}</span>}
      </div>
   )
}

AuthInput.propTypes = {
   label: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   register: PropTypes.func.isRequired,
   name: PropTypes.string.isRequired,
   placeholder: PropTypes.string.isRequired,
   errors: PropTypes.object.isRequired,
   registerOptions: PropTypes.object, 
}

export default AuthInput
