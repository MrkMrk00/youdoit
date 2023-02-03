import { handleApiRequest } from '../../utilities/handlers'

export default handleApiRequest(async (req, res) => {
	res.json({ host: req.headers.host })
})
