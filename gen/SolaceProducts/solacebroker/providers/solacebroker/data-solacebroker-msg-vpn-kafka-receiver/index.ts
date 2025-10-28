// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_kafka_receiver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnKafkaReceiverConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Kafka Receiver.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_kafka_receiver#kafka_receiver_name DataSolacebrokerMsgVpnKafkaReceiver#kafka_receiver_name}
  */
  readonly kafkaReceiverName: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_kafka_receiver#msg_vpn_name DataSolacebrokerMsgVpnKafkaReceiver#msg_vpn_name}
  */
  readonly msgVpnName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_kafka_receiver solacebroker_msg_vpn_kafka_receiver}
*/
export class DataSolacebrokerMsgVpnKafkaReceiver extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_kafka_receiver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpnKafkaReceiver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpnKafkaReceiver to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpnKafkaReceiver that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_kafka_receiver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpnKafkaReceiver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_kafka_receiver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_kafka_receiver solacebroker_msg_vpn_kafka_receiver} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnKafkaReceiverConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnKafkaReceiverConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_kafka_receiver',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._kafkaReceiverName = config.kafkaReceiverName;
    this._msgVpnName = config.msgVpnName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_aws_msk_iam_access_key_id - computed: true, optional: false, required: false
  public get authenticationAwsMskIamAccessKeyId() {
    return this.getStringAttribute('authentication_aws_msk_iam_access_key_id');
  }

  // authentication_aws_msk_iam_region - computed: true, optional: false, required: false
  public get authenticationAwsMskIamRegion() {
    return this.getStringAttribute('authentication_aws_msk_iam_region');
  }

  // authentication_aws_msk_iam_sts_external_id - computed: true, optional: false, required: false
  public get authenticationAwsMskIamStsExternalId() {
    return this.getStringAttribute('authentication_aws_msk_iam_sts_external_id');
  }

  // authentication_aws_msk_iam_sts_role_arn - computed: true, optional: false, required: false
  public get authenticationAwsMskIamStsRoleArn() {
    return this.getStringAttribute('authentication_aws_msk_iam_sts_role_arn');
  }

  // authentication_aws_msk_iam_sts_role_session_name - computed: true, optional: false, required: false
  public get authenticationAwsMskIamStsRoleSessionName() {
    return this.getStringAttribute('authentication_aws_msk_iam_sts_role_session_name');
  }

  // authentication_basic_username - computed: true, optional: false, required: false
  public get authenticationBasicUsername() {
    return this.getStringAttribute('authentication_basic_username');
  }

  // authentication_kerberos_keytab_file_name - computed: true, optional: false, required: false
  public get authenticationKerberosKeytabFileName() {
    return this.getStringAttribute('authentication_kerberos_keytab_file_name');
  }

  // authentication_kerberos_service_name - computed: true, optional: false, required: false
  public get authenticationKerberosServiceName() {
    return this.getStringAttribute('authentication_kerberos_service_name');
  }

  // authentication_kerberos_user_principal_name - computed: true, optional: false, required: false
  public get authenticationKerberosUserPrincipalName() {
    return this.getStringAttribute('authentication_kerberos_user_principal_name');
  }

  // authentication_oauth_client_id - computed: true, optional: false, required: false
  public get authenticationOauthClientId() {
    return this.getStringAttribute('authentication_oauth_client_id');
  }

  // authentication_oauth_client_scope - computed: true, optional: false, required: false
  public get authenticationOauthClientScope() {
    return this.getStringAttribute('authentication_oauth_client_scope');
  }

  // authentication_oauth_client_token_endpoint - computed: true, optional: false, required: false
  public get authenticationOauthClientTokenEndpoint() {
    return this.getStringAttribute('authentication_oauth_client_token_endpoint');
  }

  // authentication_scheme - computed: true, optional: false, required: false
  public get authenticationScheme() {
    return this.getStringAttribute('authentication_scheme');
  }

  // authentication_scram_hash - computed: true, optional: false, required: false
  public get authenticationScramHash() {
    return this.getStringAttribute('authentication_scram_hash');
  }

  // authentication_scram_username - computed: true, optional: false, required: false
  public get authenticationScramUsername() {
    return this.getStringAttribute('authentication_scram_username');
  }

  // batch_delay - computed: true, optional: false, required: false
  public get batchDelay() {
    return this.getNumberAttribute('batch_delay');
  }

  // batch_max_size - computed: true, optional: false, required: false
  public get batchMaxSize() {
    return this.getNumberAttribute('batch_max_size');
  }

  // bootstrap_address_list - computed: true, optional: false, required: false
  public get bootstrapAddressList() {
    return this.getStringAttribute('bootstrap_address_list');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // group_keepalive_interval - computed: true, optional: false, required: false
  public get groupKeepaliveInterval() {
    return this.getNumberAttribute('group_keepalive_interval');
  }

  // group_keepalive_timeout - computed: true, optional: false, required: false
  public get groupKeepaliveTimeout() {
    return this.getNumberAttribute('group_keepalive_timeout');
  }

  // group_membership_type - computed: true, optional: false, required: false
  public get groupMembershipType() {
    return this.getStringAttribute('group_membership_type');
  }

  // group_partition_scheme_list - computed: true, optional: false, required: false
  public get groupPartitionSchemeList() {
    return this.getStringAttribute('group_partition_scheme_list');
  }

  // kafka_receiver_name - computed: false, optional: false, required: true
  private _kafkaReceiverName?: string; 
  public get kafkaReceiverName() {
    return this.getStringAttribute('kafka_receiver_name');
  }
  public set kafkaReceiverName(value: string) {
    this._kafkaReceiverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaReceiverNameInput() {
    return this._kafkaReceiverName;
  }

  // metadata_topic_exclude_list - computed: true, optional: false, required: false
  public get metadataTopicExcludeList() {
    return this.getStringAttribute('metadata_topic_exclude_list');
  }

  // metadata_topic_refresh_interval - computed: true, optional: false, required: false
  public get metadataTopicRefreshInterval() {
    return this.getNumberAttribute('metadata_topic_refresh_interval');
  }

  // msg_vpn_name - computed: false, optional: false, required: true
  private _msgVpnName?: string; 
  public get msgVpnName() {
    return this.getStringAttribute('msg_vpn_name');
  }
  public set msgVpnName(value: string) {
    this._msgVpnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get msgVpnNameInput() {
    return this._msgVpnName;
  }

  // transport_tls_enabled - computed: true, optional: false, required: false
  public get transportTlsEnabled() {
    return this.getBooleanAttribute('transport_tls_enabled');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      kafka_receiver_name: cdktf.stringToTerraform(this._kafkaReceiverName),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      kafka_receiver_name: {
        value: cdktf.stringToHclTerraform(this._kafkaReceiverName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
