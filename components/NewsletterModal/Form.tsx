import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import LoadingIcon from './loading.svg';

const H2 = styled.h2`
    margin-top: 0;
    text-align: center;
    font-weight: 500;
    line-height: 1.55;
`;

const P = styled.p`
    text-align: center;
    line-height: 1.55;
    font-weight: 300;
    font-size: 1rem;
    padding: 16px 0;
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(31, 141, 214);
    color: #fff;
    width: 100%;
    border: 0;
    padding: 14px 0;
    margin: 0;
    border-radius: 6px;
    font-size: 0.9rem;
    &:hover {
        cursor: pointer;
        background-color: #4ba3de;
    }
    &:active {
        background-color: #1870ab;
    }
    &:disabled {
        color: #333;
        background-color: #8fc6ea;
    }
}
`;

const ButtonClose = styled(Button)`
    background-color: transparent;
    color: rgb(31, 141, 214);
    margin-top: 8px;
    &:hover {
        background-color: #d2e8f6;
    }
    &:active {
        background-color: #a5d1ee;
    }
    &:disabled {
        color: #eee;
        background-color: transparent;
    }
`;

const Input = styled.input`
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 16px;
    padding: 10px 6px;
    font-size: 1rem;
    border: 1px solid #eaeaea;
`;

const DisplayError = styled.div`
    padding: 8px 6px;
    color: rgba(206, 57, 59, 0.9);
    font-size: 0.8rem;
    text-align: center;
`;

const Loader = styled(LoadingIcon)`
    height: 30px;
    width: 30px;
    position: absolute;
    animation: spin 2s linear infinite;
    @keyframes spin {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
    }
`;

interface Props {
    handleClose: () => void;
}

const Form = ({ handleClose }: Props) => {
    const source = 'killedbygoogle';
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);
    const [serverError, setServerError] = useState('');

    const onSubmit = async (data: any) => {
        setServerError('');
        setIsLoading(true);
        // Development Testing
        if(process.env.NODE_ENV !== 'production') {
            if(data.email === "error@killedbygoogle.com") {
                return setTimeout(() => {
                    setServerError('Something went wrong. Try again later.');
                    setIsLoading(false);
                }, 5000);
            }
            return setTimeout(() => {
                setIsLoading(false);
                setFormSuccess(true);
            }, 5000);
        }

        // Production
        const result = await fetch(
            'https://newsletter.killedbygoogle.com/members/api/send-magic-link/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
        )
            .then(response => {
                if (response.status !== 201) {
                    setServerError('Something went wrong. Try again later.');
                    setIsLoading(false);
                }
                window.localStorage.setItem('kbg-newsletter', 'subscribed');
                return setFormSuccess(true);
            });

        return result;
    };

    if(formSuccess) return <>
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src="/envelope.svg" style={{ width: '80px', height: '60px' }} />
            </div>
        </div>
        <H2>Now check your email!</H2>
        <P style={{ paddingTop: '0px' }}>To complete signup, click the confirmation link in your inbox. If it doesn’t arrive within a few minutes, check your spam folder!</P>
        <Button onClick={handleClose}>Close</Button>
    </>;

    return <>
        <H2 style={{marginBottom: 0}}>Subscribe to the<br/>Killed by Google Newsletter</H2>
        <P style={{fontSize: '0.9rem', marginTop: '0', }}>Get exclusive content and curated tech news<br/> and be the first to know about Google's next victim.</P>
        <form onSubmit={handleSubmit(onSubmit)}>

            <input {...register('name', { validate: (val) => val === '' })} type="hidden" />
            <input {...register('requestSrc', { required: true, value: source, validate: (val) => val === source })} type="hidden" />
            <label htmlFor="email">
                <div style={{fontSize: '0.8rem', marginBottom: '8px', fontWeight: 500, }}>Email</div>
                <Input
                    {...register('email', {
                        required: true,
                    })}
                    type="email"
                    placeholder="knife@killedbygoogle.com"
                    disabled={isLoading}
                />
            </label>

            <Button type="submit" disabled={isLoading}>
                {!isLoading ? 'Subscribe' : <div style={{ height: '16px', width: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Loader /></div>}
            </Button>

            <ButtonClose type="button" onClick={handleClose} disabled={isLoading}>No Thanks</ButtonClose>

            <DisplayError>
                {errors.email && <span>An email is required.</span>}
                {errors.name && <span>Sorry, Mr. Robot.</span>}
                {serverError}
            </DisplayError>

        </form>
    </>;
};

export default Form;