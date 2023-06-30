interface MainButtonProps {
  text: string
  variant: 'primary' | 'secondary'
  Icon?: React.FC
}

export const MainButton: React.FC<MainButtonProps> = ({
  text,
  variant,
  Icon,
}) => {
  return (
    <button
      className={`h-11 rounded-lg px-4 duration-300 focus:ring-white focus:ring-opacity-10 active:scale-95 active:ring-0
      ${
        variant === 'primary'
          ? 'bg-neutral-900 text-white ring-2 ring-neutral-900'
          : 'bg-neutral-200 text-darkLight ring-2 ring-neutral-200 focus:ring-opacity-80'
      }
      `}
    >
      {Icon != null && <Icon />}
      {text}
    </button>
  )
}
