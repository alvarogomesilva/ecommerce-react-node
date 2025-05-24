
export const useLocalStorage = () => {

    function getToken() {
        const token = localStorage.getItem('@t')
        
        if (token) {
            return token
        }

        return null
    }

    return { getToken }
}