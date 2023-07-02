interface MainButtonProps {
  text: string
  variant: 'white' | 'black'
  Icon?: React.FC
  onClick?: () => void
}

export const MainButton: React.FC<MainButtonProps> = ({
  text,
  variant,
  Icon,
  onClick,
}) => {
  return (
    <button
      className={`flex h-11 select-none items-center justify-center gap-2 rounded-lg px-4 duration-300 focus:ring-white focus:ring-opacity-10 active:scale-95 active:ring-0
      ${Icon === undefined ? '' : 'w-full'}
      ${
        variant === 'black'
          ? 'bg-neutral-900 text-white ring-2 ring-neutral-900'
          : 'bg-white text-dark ring-2 ring-neutral-50 focus:ring-opacity-80'
      }
      `}
      onClick={onClick}
    >
      {Icon != null && <Icon />}
      {text}
    </button>
  )
}
