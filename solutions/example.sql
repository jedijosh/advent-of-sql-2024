-- Example problem:
-- Find the top cities in each country (max top 3 cities for each country) 
-- with the highest average naughty_nice_score for children who received gifts, 
-- but only include cities with at least 5 children.
select c.city, c.country, avg(c.naughty_nice_score)
from Children c
inner join ChristmasList cl on c.child_id = cl.child_id
where cl.was_delivered = 1
-- Only include cities with at least 5 children
and (c.city, c.country) in (select c.city, c.country
				  from Children c
				  inner join ChristmasList cl on c.child_id = cl.child_id
				  where cl.was_delivered = 1
                  group by c.city, c.country
                  having count(*) >= 5
                  )
group by c.city, c.country
order by country, 3 desc;