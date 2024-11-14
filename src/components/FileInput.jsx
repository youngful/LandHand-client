import PropTypes from 'prop-types'

function FileInput({ label, register, errors, name, onChange, selectedFile }) {
    const truncateFileName = (fileName, maxLength = 20) => {
        if (fileName.length > maxLength) {
            return fileName.slice(0, maxLength) + '...'
        }
        return fileName
    }

    return (
        <div>
            <label className='block mb-2 ml-6 text-[16px] leading-[16px]'>
                {label}
            </label>
            <div className='relative flex items-center border-black border-[1px] rounded-[16px] bg-white h-[100px] px-4 py-2'>
                <input
                    type='file'
                    accept='image/*'
                    className='hidden'
                    id='photo-upload'
                    {...register(name, {
                        required: 'Photo is required',
                    })}
                    onChange={onChange}
                />
                <label
                    htmlFor='photo-upload'
                    className='px-4 py-1 secondary_btn'
                >
                    {selectedFile ? truncateFileName(selectedFile.name) : 'Choose File'}
                </label>
            </div>
            {errors[name] && (
                <span className='ml-6 text-red-500 opacity-[0.7] text-[12px]'>
                    {errors[name].message}
                </span>
            )}
        </div>
    )
}

FileInput.propTypes = {
    label: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    selectedFile: PropTypes.object,
}

export default FileInput
