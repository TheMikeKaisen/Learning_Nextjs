
function RandomNumberGenerate(count: number): number {
    const c = Math.floor(Math.random()*count)
    return c;
}

export default function Blog() {

    // returns either 0 or 1
    // if 0 is returned then we throw an error
    const randomNumber = RandomNumberGenerate(2)
    if(randomNumber===0){
        throw new Error("This page cannot be loaded")
    }
  return (
    <div>This is the main blog page!</div>
  )
}
