class DisabledPerson < ApplicationRecord
    has_many :job_experiences
    has_many :phones
    has_one :address
end
