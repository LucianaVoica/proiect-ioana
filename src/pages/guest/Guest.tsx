import React from 'react';
import {Button} from "@nextui-org/react";
export const Guest: React.FC=() =>{
    return (
        <div className={'flex flex-col  bg-green-400 text-white rounded-tr-2xl rounded-br-2xl px-12 py-36'}>
            <h2 className="text-3xl font-bold justify-between">Hello</h2>
            <div className="border  w-10 border-white inline-block mb-2"/>
            <p> De aici va puteti loga ca invitati</p>
            <div className={'p-5'}>
            <Button
                isLoading={false}
                color={'success'}
                className={'text-white'}
                variant={'solid'}
                title={'invitat'}> Logheaza-te ca invitat </Button>
            </div>
        </div>
    )
}