export const useRouter = () => ({
    push: () => {},
    back: () => {},
    refresh: () => {}
})

export const usePathname = () => '/storybook-mocked-pathname';

export const useSearchParams = () => new URLSearchParams();