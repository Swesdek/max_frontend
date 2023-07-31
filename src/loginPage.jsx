import React, {useEffect, useState, useRef} from 'react' 
import ky from 'ky'

import {useForm} from 'react-hook-form'

export default function LoginPage() {
    const [loginResponse, setLoginResponse] = useState(0)
    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
    } = useForm({mode : "onBlur"})
    const onSubmit = async (data) => {
        setLoginResponse(await ky.post('http://5.252.195.187/api/send', {json : data}).json())
    }  


    useEffect(() => {

    }, [loginResponse])

    try {
        return <div className='gettinInPage w-screen h-screen bg-slate-800 flex'>
            <form className='flex flex-col m-auto h-96 w-150 bg-neutral-700 rounded-3xl text-amber-500'
            onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-4xl m-auto'>Вход в аккаунт</h1>
                <div className='m-auto w-3/5'>
                    <input className='bg-neutral-600 text-xl w-full p-2 focus:border-none border-none focus:outline-none rounded-md shadow-inner h-12' placeholder='Электронная почта' {
                        ...register('u_email', {
                            required : "Поле обязательно к заполнению!",
                            pattern : {
                                value : /[a-zA-Zа-яА-Я]/g,
                                message : "Только буквы!"
                            }
                        })
                    }>
                    </input>
                    <div className='absolute'>
                                        {errors?.u_email && <p className='weight-600 text-red-500 text-xl'>{errors?.u_email?.message || "Неверный ввод"}</p>}
                                        
                    </div>
                </div>
                <div className='m-auto w-3/5'>
                    <input placeholder='Пароль' className='bg-neutral-600 text-xl w-full p-2 focus:border-none border-none focus:outline-none rounded-md shadow-inner h-12' type='password'{
                        ...register('u_password', {
                            required : "Поле обязательно к заполнению!"
                        })
                    }>
                    </input>
                    <div className='absolute'>
                                        {errors?.u_password && <p className='weight-600 text-red-500 text-xl'>{errors?.u_password?.message || "Неверный ввод"}</p>}
                    </div>
                </div>
                <input 
                className='w-80 h-12 bg-neutral-600 rounded-md m-auto text-xl'
                value={'Войти'}
                type='submit'>
                </input>
            </form>
        </div>
    } catch(e) {
        console.log(e)
    }
}