import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import FormInput from './FormInput'
import { createFields } from './arrays'
import CloseButton from './CloseButton'
import { useState } from 'react'
import FileInput from './FileInput'
import { createPost } from '../api'

function CreatePostModal({ isOpen, onClose }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const [selectedFile, setSelectedFile] = useState(null)

	const onSubmitPost = async (data) => {
		const formData = new FormData();
			
		formData.append('token', localStorage.getItem('token'));
		formData.append('title', data.title); 
		formData.append('content', data.content); 
	
		if (selectedFile) {
			formData.append('img', selectedFile);
		}
	
		try {
			const response = await createPost(formData);
			console.log('Post created:', response);
			onClose();
		} catch (error) {
			console.error('Error submitting post:', error);
		}
	};
	
	

	const handleFileChange = event => {
		const file = event.target.files[0]
		setSelectedFile(file)
	}

	if (!isOpen) return null

	return (
		<div className='fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-50'>
			<div className='absolute bg-[#E5E5E5] top-[200px] left-1/2 transform -translate-x-1/2 p-8 rounded-[48px] max-w-[600px] w-full'>
				<div className='flex items-center justify-between mb-8'>
					<h4>Create a post</h4>
					<div onClick={onClose}>
						<CloseButton />
					</div>
				</div>

				<form
					className='flex flex-col gap-4'
					onSubmit={handleSubmit(onSubmitPost)}
				>
					{createFields.map((field, index) => (
						<div key={index}>
							<FormInput
								label={field.label}
								type={field.type}
								name={field.name}
								placeholder={field.placeholder}
								register={register}
								errors={errors}
								registerOptions={field.register}
							/>
						</div>
					))}

					<FileInput
						label='Upload Photo'
						register={register}
						errors={errors}
						name='photo'
						onChange={handleFileChange}
						selectedFile={selectedFile}
					/>

					<div className='flex justify-end gap-4'>
						<button className='px-4 py-2 primary_btn w-fit' type='submit'>
							Create
						</button>
						<button
							className='bg-[#151F30] text-white rounded-[32px] px-4 py-2'
							onClick={onClose}
							type='button'
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

CreatePostModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
}

export default CreatePostModal
