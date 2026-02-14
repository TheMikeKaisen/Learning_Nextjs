
// the output of this file would look like:
// localhost:3000/docs/hello1/hello2
// o/p: 1st param: hello1, 2nd Param: hello2

// localhost:3000/docs would provide an error if folder name is [...slug]. 
// rename it to [[...slug]]
// slug word is a naming convention
export default async function page({params}: {
    params: Promise<{slug: string[]}>
}) {

    const {slug} = await params;
    if(slug.length==2){
        return `1st param: ${slug[0]}, 2nd Param: ${slug[1]}`
    }
    else if(slug.length==1){
        return `1st param: ${slug[0]}`
    }
  return "Docs Page"
}
