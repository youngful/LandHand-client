import PropTypes from 'prop-types'
import { useState } from 'react'

const FormInput = ({
	label,
	type,
	register,
	name,
	placeholder,
	errors,
	registerOptions,
}) => {
	const [charCount, setCharCount] = useState(0)

	const handleInputChange = e => {
		setCharCount(e.target.value.length)
	}

	return (
		<div className='block w-full'>
			<label
				htmlFor={name}
				className={`block mb-2 ml-6 ${
					name === 'content' ? 'text-[18px]' : 'text-[16px]'
				} leading-[16px] whitespace-nowrap`}
			>
				{label}
			</label>
			<div className='relative'>
				{name === 'content' ? (
					<textarea
						className='w-full rounded-[32px] py-5 h-[150px] text-[16px] pl-6 pr-20 outline-none border-none resize-none placeholder:text-[#B2B2B2] placeholder:text-[14px] leading-[16px]'
						id={name}
						placeholder={placeholder}
						{...register(name, registerOptions)}
						onChange={handleInputChange}
						maxLength={1000}
					/>
				) : (
					<input
						className='w-full rounded-[32px] py-5 pl-6 pr-20 outline-none border-none placeholder:text-[#B2B2B2] placeholder:text-[14px] leading-[16px]'
						type={type}
						id={name}
						placeholder={placeholder}
						{...register(name, registerOptions)}
					/>
				)}

				{name === 'content' && (
					<span className='absolute bottom-2 right-6 text-gray-400 text-[12px]'>{`${charCount}/1000`}</span>
				)}
			</div>
			{errors[name] && (
				<span className='ml-6 text-red-500 opacity-[0.7] text-[12px]'>
					{errors[name].message}
				</span>
			)}
		</div>
	)
}

FormInput.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	register: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	errors: PropTypes.object.isRequired,
	registerOptions: PropTypes.object,
}

export default FormInput
