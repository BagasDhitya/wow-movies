import { FC, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    id: string;
    register?: any;
    error?: boolean;
    label?: string;
    message?: string,
    showLabel?: boolean;
}

const Input: FC<Props> = ({
    placeholder,
    showLabel,
    register,
    onChange,
    disabled,
    message,
    label,
    value,
    error,
    name,
    type,
    id,
    ...props
}) => {
    return (
        <div className="form-control w-full">
            {showLabel && (
                <label className="label">
                    <span className="label-text">{placeholder}</span>
                </label>
            )}
            <input
                className={`${error === false ?
                    `input input-bordered w-full bg-gray-50 p-2 text-black shadow-md focus:border-wow-coral-red focus:outline-none focus:ring-1 focus:ring-wow-coral-red disabled:bg-slate-200`
                    : `border-red-500`}`}
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                {...(register ? register(name) : {})}
                {...props}
            />
            {error && (
                <label className="label">
                    <p className="text-neutral-500 break-words text-sm">
                        {message}
                    </p>
                </label>
            )}
        </div>
    );
};

export default Input;
