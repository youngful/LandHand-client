export const loginFields = [
	{
		label: 'Email',
		type: 'email',
		name: 'email',
		placeholder: 'Enter your email',
		validation: {
			required: 'Email is required',
			pattern: {
				value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
				message: 'Please enter a valid email address',
			},
		},
	},
	{
		label: 'Password',
		type: 'password',
		name: 'password',
		placeholder: 'Enter your password',
		register: {
			required: 'Password is required',
			minLength: {
				value: 8,
				message: 'Password must be at least 8 characters long',
			},
		},
	},
]

export const registerFields = [
	{
		label: 'First name',
		type: 'text',
		name: 'firstName',
		placeholder: 'Enter first name',
		register: {
			required: 'First name is required',
			minLength: {
				value: 2,
				message: 'First name must be at least 2 characters',
			},
		},
	},
	{
		label: 'Last name',
		type: 'text',
		name: 'lastName',
		placeholder: 'Enter last name',
		register: {
			required: 'Last name is required',
			minLength: {
				value: 2,
				message: 'Last name must be at least 2 characters',
			},
		},
	},
	{
		label: 'Email',
		type: 'email',
		name: 'email',
		placeholder: 'Enter your email',
		register: {
			required: 'Email is required',
			pattern: {
				value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
				message: 'Invalid email address',
			},
		},
	},
	{
		label: 'Password',
		type: 'password',
		name: 'password',
		placeholder: 'Enter your password',
		register: {
			required: 'Password is required',
			minLength: {
				value: 8,
				message: 'Password must be at least 8 characters long',
			},
			pattern: {
				value: /^(?=.*[a-zA-Z]).+$/,
				message: 'Password must contain at least one letter',
			},
		},
	},
	{
		label: 'Confirm password',
		type: 'password',
		name: 'confirmPassword',
		placeholder: 'Confirm your password',
		register: {
			required: 'Confirm password is required',
		},
	},
]

export const createFields = [
	{
		label: 'Title',
		type: 'text',
		name: 'title',
		placeholder: 'Enter title of post',
		register: {
			required: 'Title is required',
			minLength: {
				value: 3,
				message: 'Minimum 3 characters',
			},
			maxLength: {
				value: 50,
				message: 'Maximum 50 characters',
			}
		},
	},
	{
		label: 'Content',
		type: 'text',
		name: 'content',
		placeholder: 'Enter content text of post',
		register: {
			required: 'Content is required',
			minLength: {
				value: 10,
				message: 'Minimum 10 characters',
			},
			maxLength: {
				value: 1000,
				message: 'Maximum 1000 characters',
			}
		},
	},	
]

export const filters = [
	'Latest',
	'Oldest',
	'Popular',
	'Unpopular'
]