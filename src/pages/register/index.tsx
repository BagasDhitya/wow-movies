import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, sendEmailVerification, User } from 'firebase/auth'
import { auth } from '../../../firebase'
import Swal from 'sweetalert2'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Layout from '../../components/Layout'

const Register = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const emailVerification = (email: User) => {
        sendEmailVerification(email)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: `A verification link has been sent to the ${email.email}`,
                    showConfirmButton: true,
                })
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: `Something went wrong, please try again later!`,
                    showConfirmButton: true,
                })
            })
    }

    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                emailVerification(user)
            })
            .catch((error) => {
                alert(error)
            })
    }

    return (
        <Layout>
            <div className='p-52 mx-96'>
                <form className='flex justify-center'
                    onSubmit={handlerSubmit}
                >
                    <div className='space-y-10'>
                        <Input
                            id='username'
                            name='username'
                            placeholder='Enter your username ...'
                            onChange={(e: any) => setUsername(e.target.value)}
                            value={username}
                            error={false}
                        />
                        <Input
                            id='email'
                            name='email'
                            placeholder='Enter your email ...'
                            onChange={(e: any) => setEmail(e.target.value)}
                            value={email}
                            error={false}
                        />
                        <Input
                            id='password'
                            name='password'
                            placeholder='Enter your password ...'
                            value={password}
                            onChange={(e: any) => setPassword(e.target.value)}
                            error={false}
                        />
                        <div>
                            <Button
                                id='register'
                                title='Register'
                                type={'long'}
                            />
                        </div>
                    </div>
                </form>
            </div>

        </Layout>
    )
}

export default Register