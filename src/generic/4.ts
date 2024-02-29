/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PageInfo {
  title: string;
}

class Component<T extends object> {
  constructor(public props: T) {
  }
}

class Page extends Component<PageInfo> {
  pageInfo() {
    console.log(this.props.title);
  }
}

const page = new Page({ title: "My page" })

console.log(page.pageInfo())

export {};
