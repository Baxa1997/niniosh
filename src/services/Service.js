import httpRequest from './httpRequest'
import { useQuery } from 'react-query'

const Service = {
	getList: (params) => httpRequest.get('``', { params }),
}

export const usesQuery = ({ params = {}, queryParams } = {}) => {
	return useQuery(
		['``', params],
		() => {
			return Service.getList(params)
		},
		queryParams
	)
}

export default Service