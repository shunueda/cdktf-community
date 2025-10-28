// https://registry.terraform.io/providers/saviynt/saviynt/0.2.12/docs/data-sources/sap_connection_datasource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSaviyntSapConnectionDatasourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * If false, do not store connection_attributes in state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.12/docs/data-sources/sap_connection_datasource#authenticate DataSaviyntSapConnectionDatasource#authenticate}
  */
  readonly authenticate: boolean | cdktf.IResolvable;
  /**
  * The key of the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.12/docs/data-sources/sap_connection_datasource#connection_key DataSaviyntSapConnectionDatasource#connection_key}
  */
  readonly connectionKey?: number;
  /**
  * The name of the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.12/docs/data-sources/sap_connection_datasource#connection_name DataSaviyntSapConnectionDatasource#connection_name}
  */
  readonly connectionName?: string;
}
export interface DataSaviyntSapConnectionDatasourceConnectionAttributesConnectionTimeoutConfig {
}

export function dataSaviyntSapConnectionDatasourceConnectionAttributesConnectionTimeoutConfigToTerraform(struct?: DataSaviyntSapConnectionDatasourceConnectionAttributesConnectionTimeoutConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSaviyntSapConnectionDatasourceConnectionAttributesConnectionTimeoutConfigToHclTerraform(struct?: DataSaviyntSapConnectionDatasourceConnectionAttributesConnectionTimeoutConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSaviyntSapConnectionDatasourceConnectionAttributesConnectionTimeoutConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSaviyntSapConnectionDatasourceConnectionAttributesConnectionTimeoutConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSaviyntSapConnectionDatasourceConnectionAttributesConnectionTimeoutConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_timeout - computed: true, optional: false, required: false
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }

  // read_timeout - computed: true, optional: false, required: false
  public get readTimeout() {
    return this.getNumberAttribute('read_timeout');
  }

  // retry_count - computed: true, optional: false, required: false
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }

  // retry_failure_status_code - computed: true, optional: false, required: false
  public get retryFailureStatusCode() {
    return this.getNumberAttribute('retry_failure_status_code');
  }

  // retry_wait - computed: true, optional: false, required: false
  public get retryWait() {
    return this.getNumberAttribute('retry_wait');
  }

  // retry_wait_max_value - computed: true, optional: false, required: false
  public get retryWaitMaxValue() {
    return this.getNumberAttribute('retry_wait_max_value');
  }

  // token_refresh_max_try_count - computed: true, optional: false, required: false
  public get tokenRefreshMaxTryCount() {
    return this.getNumberAttribute('token_refresh_max_try_count');
  }
}
export interface DataSaviyntSapConnectionDatasourceConnectionAttributes {
}

export function dataSaviyntSapConnectionDatasourceConnectionAttributesToTerraform(struct?: DataSaviyntSapConnectionDatasourceConnectionAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSaviyntSapConnectionDatasourceConnectionAttributesToHclTerraform(struct?: DataSaviyntSapConnectionDatasourceConnectionAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSaviyntSapConnectionDatasourceConnectionAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSaviyntSapConnectionDatasourceConnectionAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSaviyntSapConnectionDatasourceConnectionAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alternate_output_parameter_et_data - computed: true, optional: false, required: false
  public get alternateOutputParameterEtData() {
    return this.getStringAttribute('alternate_output_parameter_et_data');
  }

  // audit_log_json - computed: true, optional: false, required: false
  public get auditLogJson() {
    return this.getStringAttribute('audit_log_json');
  }

  // config_json - computed: true, optional: false, required: false
  public get configJson() {
    return this.getStringAttribute('config_json');
  }

  // connection_timeout_config - computed: true, optional: false, required: false
  private _connectionTimeoutConfig = new DataSaviyntSapConnectionDatasourceConnectionAttributesConnectionTimeoutConfigOutputReference(this, "connection_timeout_config");
  public get connectionTimeoutConfig() {
    return this._connectionTimeoutConfig;
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // create_account_json - computed: true, optional: false, required: false
  public get createAccountJson() {
    return this.getStringAttribute('create_account_json');
  }

  // data_import_filter - computed: true, optional: false, required: false
  public get dataImportFilter() {
    return this.getStringAttribute('data_import_filter');
  }

  // ecc_or_s4hana - computed: true, optional: false, required: false
  public get eccOrS4Hana() {
    return this.getStringAttribute('ecc_or_s4hana');
  }

  // enable_account_json - computed: true, optional: false, required: false
  public get enableAccountJson() {
    return this.getStringAttribute('enable_account_json');
  }

  // enforce_password_change - computed: true, optional: false, required: false
  public get enforcePasswordChange() {
    return this.getStringAttribute('enforce_password_change');
  }

  // external_sod_eval_json - computed: true, optional: false, required: false
  public get externalSodEvalJson() {
    return this.getStringAttribute('external_sod_eval_json');
  }

  // external_sod_eval_json_detail - computed: true, optional: false, required: false
  public get externalSodEvalJsonDetail() {
    return this.getStringAttribute('external_sod_eval_json_detail');
  }

  // firefighterid_grant_access_json - computed: true, optional: false, required: false
  public get firefighteridGrantAccessJson() {
    return this.getStringAttribute('firefighterid_grant_access_json');
  }

  // firefighterid_revoke_access_json - computed: true, optional: false, required: false
  public get firefighteridRevokeAccessJson() {
    return this.getStringAttribute('firefighterid_revoke_access_json');
  }

  // hana_ref_table_json - computed: true, optional: false, required: false
  public get hanaRefTableJson() {
    return this.getStringAttribute('hana_ref_table_json');
  }

  // is_timeout_config_validated - computed: true, optional: false, required: false
  public get isTimeoutConfigValidated() {
    return this.getBooleanAttribute('is_timeout_config_validated');
  }

  // is_timeout_supported - computed: true, optional: false, required: false
  public get isTimeoutSupported() {
    return this.getBooleanAttribute('is_timeout_supported');
  }

  // jco_ashost - computed: true, optional: false, required: false
  public get jcoAshost() {
    return this.getStringAttribute('jco_ashost');
  }

  // jco_client - computed: true, optional: false, required: false
  public get jcoClient() {
    return this.getStringAttribute('jco_client');
  }

  // jco_group - computed: true, optional: false, required: false
  public get jcoGroup() {
    return this.getStringAttribute('jco_group');
  }

  // jco_lang - computed: true, optional: false, required: false
  public get jcoLang() {
    return this.getStringAttribute('jco_lang');
  }

  // jco_mshost - computed: true, optional: false, required: false
  public get jcoMshost() {
    return this.getStringAttribute('jco_mshost');
  }

  // jco_msserv - computed: true, optional: false, required: false
  public get jcoMsserv() {
    return this.getStringAttribute('jco_msserv');
  }

  // jco_r3name - computed: true, optional: false, required: false
  public get jcoR3Name() {
    return this.getStringAttribute('jco_r3name');
  }

  // jco_snc_library - computed: true, optional: false, required: false
  public get jcoSncLibrary() {
    return this.getStringAttribute('jco_snc_library');
  }

  // jco_snc_mode - computed: true, optional: false, required: false
  public get jcoSncMode() {
    return this.getStringAttribute('jco_snc_mode');
  }

  // jco_snc_myname - computed: true, optional: false, required: false
  public get jcoSncMyname() {
    return this.getStringAttribute('jco_snc_myname');
  }

  // jco_snc_partner_name - computed: true, optional: false, required: false
  public get jcoSncPartnerName() {
    return this.getStringAttribute('jco_snc_partner_name');
  }

  // jco_snc_qop - computed: true, optional: false, required: false
  public get jcoSncQop() {
    return this.getStringAttribute('jco_snc_qop');
  }

  // jco_sysnr - computed: true, optional: false, required: false
  public get jcoSysnr() {
    return this.getStringAttribute('jco_sysnr');
  }

  // jco_user - computed: true, optional: false, required: false
  public get jcoUser() {
    return this.getStringAttribute('jco_user');
  }

  // logs_table_filter - computed: true, optional: false, required: false
  public get logsTableFilter() {
    return this.getStringAttribute('logs_table_filter');
  }

  // message_server - computed: true, optional: false, required: false
  public get messageServer() {
    return this.getStringAttribute('message_server');
  }

  // modify_user_data_json - computed: true, optional: false, required: false
  public get modifyUserDataJson() {
    return this.getStringAttribute('modify_user_data_json');
  }

  // pam_config - computed: true, optional: false, required: false
  public get pamConfig() {
    return this.getStringAttribute('pam_config');
  }

  // password_max_length - computed: true, optional: false, required: false
  public get passwordMaxLength() {
    return this.getStringAttribute('password_max_length');
  }

  // password_min_length - computed: true, optional: false, required: false
  public get passwordMinLength() {
    return this.getStringAttribute('password_min_length');
  }

  // password_noof_caps_alpha - computed: true, optional: false, required: false
  public get passwordNoofCapsAlpha() {
    return this.getStringAttribute('password_noof_caps_alpha');
  }

  // password_noof_digits - computed: true, optional: false, required: false
  public get passwordNoofDigits() {
    return this.getStringAttribute('password_noof_digits');
  }

  // password_noof_spl_chars - computed: true, optional: false, required: false
  public get passwordNoofSplChars() {
    return this.getStringAttribute('password_noof_spl_chars');
  }

  // prov_cua_enabled - computed: true, optional: false, required: false
  public get provCuaEnabled() {
    return this.getStringAttribute('prov_cua_enabled');
  }

  // prov_cua_snc - computed: true, optional: false, required: false
  public get provCuaSnc() {
    return this.getStringAttribute('prov_cua_snc');
  }

  // prov_jco_ashost - computed: true, optional: false, required: false
  public get provJcoAshost() {
    return this.getStringAttribute('prov_jco_ashost');
  }

  // prov_jco_client - computed: true, optional: false, required: false
  public get provJcoClient() {
    return this.getStringAttribute('prov_jco_client');
  }

  // prov_jco_group - computed: true, optional: false, required: false
  public get provJcoGroup() {
    return this.getStringAttribute('prov_jco_group');
  }

  // prov_jco_lang - computed: true, optional: false, required: false
  public get provJcoLang() {
    return this.getStringAttribute('prov_jco_lang');
  }

  // prov_jco_mshost - computed: true, optional: false, required: false
  public get provJcoMshost() {
    return this.getStringAttribute('prov_jco_mshost');
  }

  // prov_jco_msserv - computed: true, optional: false, required: false
  public get provJcoMsserv() {
    return this.getStringAttribute('prov_jco_msserv');
  }

  // prov_jco_r3name - computed: true, optional: false, required: false
  public get provJcoR3Name() {
    return this.getStringAttribute('prov_jco_r3name');
  }

  // prov_jco_sysnr - computed: true, optional: false, required: false
  public get provJcoSysnr() {
    return this.getStringAttribute('prov_jco_sysnr');
  }

  // prov_jco_user - computed: true, optional: false, required: false
  public get provJcoUser() {
    return this.getStringAttribute('prov_jco_user');
  }

  // reset_pwd_for_new_account - computed: true, optional: false, required: false
  public get resetPwdForNewAccount() {
    return this.getStringAttribute('reset_pwd_for_new_account');
  }

  // saptable_filter_lang - computed: true, optional: false, required: false
  public get saptableFilterLang() {
    return this.getStringAttribute('saptable_filter_lang');
  }

  // set_cua_system - computed: true, optional: false, required: false
  public get setCuaSystem() {
    return this.getStringAttribute('set_cua_system');
  }

  // snc - computed: true, optional: false, required: false
  public get snc() {
    return this.getStringAttribute('snc');
  }

  // status_threshold_config - computed: true, optional: false, required: false
  public get statusThresholdConfig() {
    return this.getStringAttribute('status_threshold_config');
  }

  // system_name - computed: true, optional: false, required: false
  public get systemName() {
    return this.getStringAttribute('system_name');
  }

  // tables - computed: true, optional: false, required: false
  public get tables() {
    return this.getStringAttribute('tables');
  }

  // terminated_user_group - computed: true, optional: false, required: false
  public get terminatedUserGroup() {
    return this.getStringAttribute('terminated_user_group');
  }

  // terminated_user_role_action - computed: true, optional: false, required: false
  public get terminatedUserRoleAction() {
    return this.getStringAttribute('terminated_user_role_action');
  }

  // update_account_json - computed: true, optional: false, required: false
  public get updateAccountJson() {
    return this.getStringAttribute('update_account_json');
  }

  // user_import_json - computed: true, optional: false, required: false
  public get userImportJson() {
    return this.getStringAttribute('user_import_json');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.12/docs/data-sources/sap_connection_datasource saviynt_sap_connection_datasource}
*/
export class DataSaviyntSapConnectionDatasource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_sap_connection_datasource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSaviyntSapConnectionDatasource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSaviyntSapConnectionDatasource to import
  * @param importFromId The id of the existing DataSaviyntSapConnectionDatasource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.12/docs/data-sources/sap_connection_datasource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSaviyntSapConnectionDatasource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_sap_connection_datasource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.12/docs/data-sources/sap_connection_datasource saviynt_sap_connection_datasource} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSaviyntSapConnectionDatasourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataSaviyntSapConnectionDatasourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_sap_connection_datasource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.2.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticate = config.authenticate;
    this._connectionKey = config.connectionKey;
    this._connectionName = config.connectionName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authenticate - computed: false, optional: false, required: true
  private _authenticate?: boolean | cdktf.IResolvable; 
  public get authenticate() {
    return this.getBooleanAttribute('authenticate');
  }
  public set authenticate(value: boolean | cdktf.IResolvable) {
    this._authenticate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateInput() {
    return this._authenticate;
  }

  // connection_attributes - computed: true, optional: false, required: false
  private _connectionAttributes = new DataSaviyntSapConnectionDatasourceConnectionAttributesOutputReference(this, "connection_attributes");
  public get connectionAttributes() {
    return this._connectionAttributes;
  }

  // connection_key - computed: true, optional: true, required: false
  private _connectionKey?: number; 
  public get connectionKey() {
    return this.getNumberAttribute('connection_key');
  }
  public set connectionKey(value: number) {
    this._connectionKey = value;
  }
  public resetConnectionKey() {
    this._connectionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionKeyInput() {
    return this._connectionKey;
  }

  // connection_name - computed: true, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // default_sav_roles - computed: true, optional: false, required: false
  public get defaultSavRoles() {
    return this.getStringAttribute('default_sav_roles');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // email_template - computed: true, optional: false, required: false
  public get emailTemplate() {
    return this.getStringAttribute('email_template');
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getNumberAttribute('error_code');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // msg - computed: true, optional: false, required: false
  public get msg() {
    return this.getStringAttribute('msg');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authenticate: cdktf.booleanToTerraform(this._authenticate),
      connection_key: cdktf.numberToTerraform(this._connectionKey),
      connection_name: cdktf.stringToTerraform(this._connectionName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authenticate: {
        value: cdktf.booleanToHclTerraform(this._authenticate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connection_key: {
        value: cdktf.numberToHclTerraform(this._connectionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_name: {
        value: cdktf.stringToHclTerraform(this._connectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
