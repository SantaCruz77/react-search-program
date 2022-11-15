ch_names = ["g1", "e1", "s1", "s3"]

ch_names.each do |ch_name|

  raw_response = Faraday.get "https://api.nhk.or.jp/v2/pg/now/400/#{ch_name}.json?key=#{ENV['API_KEY']}"
  response = JSON.parse(raw_response.body)
  puts response

  Program.create(ch_logo:    response["nowonair_list"]["#{ch_name}"]["present"]["service"]["logo_s"]["url"], 
                 start_time: response["nowonair_list"]["#{ch_name}"]["present"]["start_time"], 
                 end_time:   response["nowonair_list"]["#{ch_name}"]["present"]["end_time"], 
                 title:      response["nowonair_list"]["#{ch_name}"]["present"]["title"], 
                 subtitle:   response["nowonair_list"]["#{ch_name}"]["present"]["subtitle"])
end