export default function ({redirect, store}) {
    if (store.state.auth.user.role_id !== 1){
       return redirect('/beranda')
    }
}