import { ConfigUtil } from '@cldcvr/flow-core';
import gcp_cloud_spanner from './svg/gcp-cloud-spanner';
import gcp_database_cloud_composer from './svg/gcp-database-cloud-composer';
import gcp_database_data_lab from './svg/gcp-database-data-lab';
import gcp_database_data_studio from './svg/gcp-database-data-studio';
import gcp_cloud_functions from './svg/gcp-cloud-functions';
import gcp_database_bigquery from './svg/gcp-database-bigquery';
import gcp_storage_gcs from './svg/gcp-storage-gcs';
import gcp_cloud_sql from './svg/gcp-cloud-sql';
import gcp_container_engine from './svg/gcp-container-engine';
const IconPack = {
    'gcp-cloud-spanner': gcp_cloud_spanner,
    'gcp-database-cloud-composer': gcp_database_cloud_composer,
    'gcp-database-data-lab': gcp_database_data_lab,
    'gcp-database-data-studio': gcp_database_data_studio,
    'gcp-cloud-functions': gcp_cloud_functions,
    'gcp-database-bigquery': gcp_database_bigquery,
    'gcp-storage-gcs': gcp_storage_gcs,
    'gcp-cloud-sql': gcp_cloud_sql,
    'gcp-container-engine': gcp_container_engine,
} as Record<string, string>;

ConfigUtil.setConfig({ iconPack: { ...IconPack, ...ConfigUtil.getConfig().iconPack } });
export default IconPack;
