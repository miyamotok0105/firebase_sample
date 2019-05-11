
# まずは始めてみる


```
npm install -g vue-cli
```


```
vue init webpack tutorial1
cd tutorial1
npm install
npm run dev
```

tutorial1を登録    
https://developers.google.com/identity/sign-in/web/devconsole-project


設定画面でアプリ作成したらmain.jsに追加しとく。    


```:src/main.js
<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "hoge",
    authDomain: "hoge",
    databaseURL: "hoge",
    projectId: "hoge",
    storageBucket: "hoge",
    messagingSenderId: "hoge",
    appId: "hoge"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
```


```
npm install -g firebase-tools
firebase login
#コンソール側でtutorial1のプロジェクトを作っておく。
firebase use --add
firebase init hosting
```

Database: Deploy Firebase Realtime Database Rulesを選択。    

.firebasercとfirebase.jsonはinitコマンド実行時に出来上がる。    


```
npm run build
firebase deploy
```

distディレクトリを指定。    

# DB

前もって管理画面でデータベース作成をしておく。    


```
touch database.rules.json
```


```:database.rules.json
{
  "rules": {
    "messages": {
      ".read": true,
      ".write": "auth !== null",
      "$messageId": {
        ".validate": "newData.child('name').val() === auth.token.name",
        "text": {
          ".validate": "newData.isString() && newData.val().length < 300"
        }
      }
    }
  }
}

```


```
firebase init
firebase deploy --only database
```

管理画面のルールに適応されている。    

# 実装


```
npm install sass-loader
npm install firebase
```


```
touch src/components/Chat.vue
```


```:src/router/index.js
import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Chat',
      component: Chat
    }
  ]
})
```


```:Chat.vue

```


```
npm run build
npm run dev
#firebaseをローカル実行
firebase serve
http://localhost:5000

firebase init
#public directoryはdistフォルをを選ぶ
firebase login
#コンソール側でtutorial1のプロジェクトを作っておく。
firebase use --add
firebase deploy

```




# QA

## エラー１


```
Error: HTTP Error: 401, Request had invalid authentication credentials. Expected OAuth 2 access token, login cookie or other valid authentication credential. See https://developers.google.com/identity/sign-in/web/devconsole-project.
```

一回ログアウトしてログインし直す    

```
firebase logout
```

## エラー２(ESlint)

```
Newline required at end of file but not found
```

Vueファイルの最終に空白を入れること。    


```
Missing space before function parentheses
```

function()の () などに空白が入って欲しくないか入って欲しいか。    


```
disallow or enforce spaces inside of single line blocks
```

ブロック内のスペースを消す    


```
Unnecessary use of boolean literals in conditional expression
```

三項演算子を使う必要ないので、Boolean(hoge)で変換してね。    


```
specify tab or space 
```

インデントの数変えてね    


```
Trailing spaces not allowed
```

末尾の空白を削除    


```
Expected error to be handled
```

print(err)のようにエラーを表示すればとりあえず通る。    


```
Elements in iteration expect to have 'v-bind:key' directives
```

<div v-for='(value, index) in values'>のように書く。    


```
Unexpected trailing comma
```

区切ってない最後の, は必要ない。    



# 参考

初めてのデプロイ    
https://qiita.com/Watakatsu/items/667f45081a6dfbc11074
    

firebase vuejsの本    
https://github.com/miyamotok0105/javascript_sample/blob/master/firebase1/mymarkdown/ch03.md
    


