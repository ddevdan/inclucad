class Graph::BarChart::Init
    def self.structure
        g = Graph.new
        types = ['AUDITIVA', 'FÍSICA', 'INTELECTUAL', 'VISUAL', 
        'OSTOMIA', 'MÚLTIPLAS DEFICIÊNCIAS']
        cities = Address.where(address_type:"HealthCenter").distinct(:city)

        city_hash = {}
        Evaluation.each do |ev|
            hc_city = to_upcase(ev.disabled_person.health_center.address.city)
            hc_state = to_upcase(ev.disabled_person.health_center.address.state)
            ev_type = to_upcase(ev.disabled_type)
        
            if city_hash.has_key?(hc_city)
                if city_hash[hc_city][:types].has_key?(ev_type)
                    city_hash[hc_city][:types][ev_type] +=1 unless ev_type.nil?
                else
                    city_hash[hc_city][:types][ev_type] = 1 unless ev_type.nil?
                end
            else
                city_hash[hc_city] = {:state => hc_state, :types => {ev_type => 1} } unless ev_type.nil?
            end
            
            
            
        end

        
        city_hash.each do |city, val|
            data = []
            val[:types].each do |type, quantity|
                data << {type: type, quantity: quantity }
            end
            g = Graph.create!(city: city, state: val[:state], 
                            type: "bar_chart", 
                            title:"Quantidade de Tipo de Deficiência por Cidade",
                            data: data)   
        end
    end


    def self.to_upcase(text)
        unless text.nil?
            return text.upcase
        end
    end
    

end
