const Img = ({ url, caption }) => {
  return (
    <div>
      <img src={url} alt="some image" />
      {caption.length ? (
        <p className="w-full text-center my-3 md:mb-12 text-base text-dark-grey">
          {caption}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

const Quote = ({ quote, caption }) => {
  return (
    <div className="bg-purple/10 p-3 pl-5 border-l-4 border-purple">
      <p className="text-xl leading-10 md:text-2xl">{quote}</p>
      {caption.length ? (
        <p className="w-full text-purple text-base">{caption}</p>
      ) : (
        ""
      )}
    </div>
  );
};

const List = ({ style, items }) => {
  return (
    <ol className={`pl-5 ${style=== "ordered" ? " list-decimal" : " list-disc"}`}>
      {items.map((listItem, i) => {
        return (
          <li
            key={i}
            className="my-4"
            dangerouslySetInnerHTML={{ __html: listItem }}
          ></li>
        );
      })}
    </ol>
  );
};

const BlogContent = ({ block }) => {
  let { type, data } = block;

  if (type === "paragraph") {
    return <p dangerouslySetInnerHTML={{ __html: data.text }}></p>;
  }

  if (type === "header") {
    if (data.level === 3) {
      return (
        <h3
          dangerouslySetInnerHTML={{ __html: data.text }}
          className="text-3xl font-bold"
        ></h3>
      );
    }
    return (
      <h2
        dangerouslySetInnerHTML={{ __html: data.text }}
        className="text-4xl font-bold"
      ></h2>
    );
  }

  if (type === "image") {
    return <Img url={data.file.url} caption={data.caption} />;
  }

  if (type === "quote") {
    return <Quote quote={data.text} caption={data.caption} />;
  }

  if (type === "list") {
    return <List style={data.style} items={data.items} />;
  }

  if(type === "code"){
    //console.log("type",data.code);
    return <div className="bg-black text-grey/80 p-3 pl-5 border-l-4 border-red" dangerouslySetInnerHTML={{__html:data.code}}></div>
  }
  else{
    console.log("type",type);
    return <div>to be rendered</div>
  }
};

export default BlogContent;
