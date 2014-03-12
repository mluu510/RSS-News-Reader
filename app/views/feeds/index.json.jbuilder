json.array! @feeds do |feed|
	json.id feed.id
	json.title feed.title
	json.url feed.url
	json.created_at feed.created_at
	json.updated_at feed.updated_at
	json.entries do
		json.array! feed.entries do |entry|
			json.id entry.id

		end
	end
end
