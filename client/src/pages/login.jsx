import {Card} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {Row, Container, Button} from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import axios from 'axios'
function Login() {
    const form=useForm(
        {
            defaultValues:{
                email:'',
                password:''
            }
        }
    )
    const {register,handleSubmit,formState}=form
    const {errors}=formState
    const onSubmit=(data)=>{
        axios.post('http://localhost:3000/api/users/login',data).then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <Container >
      <Card >
        <Form className='m-3 py-3 px-4' onSubmit={handleSubmit(onSubmit)}>
        <Form.Group as={Row}  >
              <Form.Label>email</Form.Label>
              <Form.Control
                type="text"
                {
                    ...register('email',{
                        required:true,
                        pattern:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

                    
                    })
                }

               
              />
              {errors.email && <span>email is required</span>}
            </Form.Group>
            <Form.Group as={Row} >
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                {
                    ...register('password',{
                        required:true,
                        minLength:{
                            value:6,
                            message:'password must be at least 6 characters'
                        },
                        maxLength:{
                            value:15,
                            message:'password must be at most 15 characters'
                        }

                    })
                }
                
              />
              {errors?.password && <span>{errors.password?.message}</span>}
            </Form.Group>
            <Button variant='primary' type='submit' >Login</Button>
        </Form>
      </Card>
    </Container>
  )
}

export default Login
