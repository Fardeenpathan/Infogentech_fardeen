import React from 'react';

export default function IndMidHeader({ title, subtitle, className }) {
    return (
        <div className={`flex justify-center items-center flex-col gap-4 ${className}`}>
            <p className="font-avalors font-normal text-[32px] leading-6 align-middle text-primary">
                {title}
            </p>
            <p className="font-avalors font-normal text-[46px] leading-12 align-middle capitalize">
                {subtitle}
            </p>
        </div>
    );
}