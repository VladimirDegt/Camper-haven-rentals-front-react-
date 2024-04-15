import cls from './FormConnected.module.scss';
import {Field, Form, Formik, FormikHelpers} from 'formik';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import {ReactElement, useState} from "react";
import {FormConnectedSchema} from "@/shared/ui/FormConnected/FormConnectedSchema";
import {Button, ButtonTheme} from "@/shared/ui/Button/Button";
import {Icon} from "@/shared/ui/Icon/Icon";
import IconCalendar from "@/shared/assets/icons/other/calendar.svg";
import {toast} from "react-toastify";

interface InitialValues {
    name: string;
    email: string;
    comment: string;
}

const customId = 'toastId';
export const FormConnected = () => {
    const [startDate, setStartDate] = useState( new Date());
    const initialValues: InitialValues = {
        name: '',
        email: '',
        comment: '',
    };

const handleChangeCalendar = (date: any) => {
    setStartDate(date);
}
    const handleSubmit = async (
        values: InitialValues,
        { resetForm }: FormikHelpers<InitialValues>
    ): Promise<void | ReactElement> => {
        if(startDate === null ) {
            toast.error('Date is required', {toastId: customId})
        } else {
            resetForm();
            toast.success('Thank you for your message!', {toastId: customId})
        }

    };

    return (
        <div className={cls.container}>
            <h3 className={cls.title}>Book your campervan now</h3>
            <p className={cls.text}>Stay connected! We are always ready to help you.</p>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={FormConnectedSchema}
            >
                {({errors, touched}) => (
                    <Form>
                        <ul className={cls.list}>
                            <li className={cls.list_item}>
                                <Field
                                    className={cls.item}
                                    name='name'
                                    type='text'
                                    placeholder='Name'
                                />
                                <p className={cls.error}>
                                    {touched.name && errors.name ? errors.name : null}
                                </p>
                            </li>
                            <li className={cls.list_item}>
                                <Field
                                    className={cls.item}
                                    name='email'
                                    type='email'
                                    placeholder='Email'
                                />
                                <p className={cls.error}>
                                    {touched.email && errors.email ? errors.email : null}
                                </p>
                            </li>
                            <li className={cls.list_item}>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => handleChangeCalendar(date)}
                                    className={cls.calendar}
                                />
                                <Icon
                                    className={cls.icon_calendar}
                                    Svg={IconCalendar}
                                    width={20}
                                    height={20}
                                />
                            </li>
                            <li className={cls.list_item}>
                                <Field
                                    className={`${cls.item} ${cls.comment}`}
                                    name='сomment'
                                    as='textarea'
                                    placeholder='Comment'
                                />
                                <p className={cls.error}>
                                    {touched.name && errors.name ? errors.name : null}
                                </p>
                            </li>
                        </ul>

                        <Button
                            type={'submit'}
                            theme={ButtonTheme.SEARCH}
                            className={cls.btn}
                        >
                            Send
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
