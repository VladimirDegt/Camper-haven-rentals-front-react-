import * as Yup from 'yup';
export const FormConnectedSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Length must be more than 3 characters')
        .max(50, 'Length should not exceed 50 characters')
        .trim()
        .required("Field is required"),
    email: Yup.string()
        .min(3, 'Length must be more than 3 characters')
        .max(150, 'Length should not exceed 150 characters')
        .email('Invalid email format')
        .matches(
            /^[A-Z0-9._%+-]+@(?!.*\.ru)[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            'Invalid email format'
        )
        .required("Field is required"),
    date: Yup.string()
        .required("Field is required"),
    comment: Yup.string()
        .max(500, 'Length should not exceed 500 characters')
        .trim()
});