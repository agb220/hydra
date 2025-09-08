'use client';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import toast from 'react-hot-toast';
import Input from './Input';
import Button from './Button';
import { joinFormSchema } from '../_schema/joinform.schema';

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const FormBlock = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: joiResolver(joinFormSchema),
  });

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (loading) return;

    setLoading(true);

    setTimeout(() => {
      const isSuccess = Math.random() > 0.1;

      if (isSuccess) {
        reset();
        toast.success('Form successfully submitted!');
      } else {
        toast.error('Error. Please try again later.');
      }

      setLoading(false);
    }, 1500);
  };

  return (
    <form className="flex flex-col gap-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col md:flex-row gap-x-2.5 gap-y-8">
        <Input
          {...register('firstName')}
          placeholder="First Name"
          error={errors.firstName?.message}
        ></Input>
        <Input
          {...register('lastName')}
          placeholder="Last Name"
          error={errors.lastName?.message}
        ></Input>
      </div>
      <div className="flex flex-col md:flex-row gap-x-2.5 gap-y-8">
        <Input {...register('email')} placeholder="Email" error={errors.email?.message}></Input>
        <Input
          {...register('phone')}
          placeholder="Phone Number"
          error={errors.phone?.message}
        ></Input>
      </div>
      <div className="flex flex-col gap-8">
        <Input
          {...register('subject')}
          placeholder="Subject"
          error={errors.subject?.message}
        ></Input>
        <Input
          {...register('message')}
          placeholder="Tell Us Something..."
          error={errors.message?.message}
          as="textarea"
        ></Input>
      </div>
      <div className="flex items-center justify-center">
        <Button isLoading={loading} type="submit">
          SEND TO HYDRA
        </Button>
      </div>
    </form>
  );
};

export default FormBlock;
