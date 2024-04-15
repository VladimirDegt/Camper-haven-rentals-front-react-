import cls from './FormConnected.module.scss';
import {Field, Form, Formik, FormikHelpers} from 'formik';
import {ReactElement} from "react";
import {FormConnectedSchema} from "@/shared/ui/FormConnected/FormConnectedSchema";
import {Button, ButtonTheme} from "@/shared/ui/Button/Button";
import {Icon} from "@/shared/ui/Icon/Icon";
import IconCalendar from "@/shared/assets/icons/other/calendar.svg";

interface InitialValues {
    name: string;
    email: string;
    date: string;
    comment: string;
}

const customId = 'toastId';
export const FormConnected = () => {

    const initialValues: InitialValues = {
        name: '',
        email: '',
        date: '',
        comment: '',
    };

    const handleSubmit = async (
        values: InitialValues,
        { resetForm }: FormikHelpers<InitialValues>
    ): Promise<void | ReactElement> => {
        console.log('values-->', values)

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
                                <Field
                                    className={cls.item}
                                    name='date'
                                    type='text'
                                    placeholder='Booking date'
                                />
                                <Button theme={ButtonTheme.CLEAR}>
                                    <Icon
                                        className={cls.icon_calendar}
                                        Svg={IconCalendar}
                                        width={20}
                                        height={20}
                                    />
                                </Button>

                                <p className={cls.error}>
                                    {touched.date && errors.date ? errors.date : null}
                                </p>
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
