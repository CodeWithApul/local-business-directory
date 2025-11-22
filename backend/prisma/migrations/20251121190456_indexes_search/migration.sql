CREATE EXTENSION IF NOT EXISTS pg_trgm;

CREATE INDEX idx_village_trgm ON "Location" USING gin (village gin_trgm_ops);

CREATE INDEX idx_block_trgm ON "Location" USING gin (block gin_trgm_ops);

CREATE INDEX idx_district_trgm ON "Location" USING gin (district gin_trgm_ops);

CREATE INDEX idx_state_trgm ON "Location" USING gin (state gin_trgm_ops);