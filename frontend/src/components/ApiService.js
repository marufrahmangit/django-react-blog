export default class ApiService {
    static UpdateArticle(article_id,body,token){
        return fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static InsertArticle(body,token){
        return fetch(`http://127.0.0.1:8000/api/articles/`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static DeleteArticle(article_id,token){
        return fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`,{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
    }

    static async LoginUser(body){
        const resp = await fetch(`http://127.0.0.1:8000/auth/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        return await resp.json()
    }

    static async RegisterUser(body){
        const resp = await fetch(`http://127.0.0.1:8000/api/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        return await resp.json()
    }
}