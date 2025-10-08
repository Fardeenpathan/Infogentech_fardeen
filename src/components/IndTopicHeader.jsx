import React from 'react';

export default function IndTopicHeader({ title, subtitle, description, className }) {
    return (
        <div className={`flex justify-between gap-8 ${className}`}>
            <div>
                <p className="font-avalors font-normal text-[32px] leading-6 align-middle text-primary">
                    {title}
                </p>
                <p className="font-avalors font-normal text-[46px] leading-12 align-middle capitalize mt-4.5 max-w-2xl">
                    {subtitle}
                </p>
            </div>
            <p className="font-montserrat font-medium text-lg leading-[150%] tracking-[-0.02em] max-w-2xl py-4">
                {description}
            </p>
        </div>
    );
}
