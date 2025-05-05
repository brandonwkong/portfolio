import { useRouter } from "next/router"

const ProjectDetail = () => {
  const router = useRouter()
  const { id } = router.query // Extract the project ID from the URL

  return (
    <div>
      <h1>Project Details for {id}</h1>
      {/* Here you can fetch and display the project details based on the ID */}
    </div>
  )
}

export default ProjectDetail
