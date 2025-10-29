// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/data-sources/syslog_server_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmSyslogServerProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of the syslog server profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/data-sources/syslog_server_profile#id DataScmSyslogServerProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The name of the syslog server profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/data-sources/syslog_server_profile#name DataScmSyslogServerProfile#name}
  */
  readonly name?: string;
}
export interface DataScmSyslogServerProfileFormatEscaping {
}

export function dataScmSyslogServerProfileFormatEscapingToTerraform(struct?: DataScmSyslogServerProfileFormatEscaping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSyslogServerProfileFormatEscapingToHclTerraform(struct?: DataScmSyslogServerProfileFormatEscaping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSyslogServerProfileFormatEscapingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSyslogServerProfileFormatEscaping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSyslogServerProfileFormatEscaping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // escape_character - computed: true, optional: false, required: false
  public get escapeCharacter() {
    return this.getStringAttribute('escape_character');
  }

  // escaped_characters - computed: true, optional: false, required: false
  public get escapedCharacters() {
    return this.getStringAttribute('escaped_characters');
  }
}
export interface DataScmSyslogServerProfileFormat {
}

export function dataScmSyslogServerProfileFormatToTerraform(struct?: DataScmSyslogServerProfileFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSyslogServerProfileFormatToHclTerraform(struct?: DataScmSyslogServerProfileFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSyslogServerProfileFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSyslogServerProfileFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSyslogServerProfileFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth - computed: true, optional: false, required: false
  public get auth() {
    return this.getStringAttribute('auth');
  }

  // config - computed: true, optional: false, required: false
  public get config() {
    return this.getStringAttribute('config');
  }

  // correlation - computed: true, optional: false, required: false
  public get correlation() {
    return this.getStringAttribute('correlation');
  }

  // data - computed: true, optional: false, required: false
  public get data() {
    return this.getStringAttribute('data');
  }

  // decryption - computed: true, optional: false, required: false
  public get decryption() {
    return this.getStringAttribute('decryption');
  }

  // escaping - computed: true, optional: false, required: false
  private _escaping = new DataScmSyslogServerProfileFormatEscapingOutputReference(this, "escaping");
  public get escaping() {
    return this._escaping;
  }

  // globalprotect - computed: true, optional: false, required: false
  public get globalprotect() {
    return this.getStringAttribute('globalprotect');
  }

  // gtp - computed: true, optional: false, required: false
  public get gtp() {
    return this.getStringAttribute('gtp');
  }

  // hip_match - computed: true, optional: false, required: false
  public get hipMatch() {
    return this.getStringAttribute('hip_match');
  }

  // iptag - computed: true, optional: false, required: false
  public get iptag() {
    return this.getStringAttribute('iptag');
  }

  // sctp - computed: true, optional: false, required: false
  public get sctp() {
    return this.getStringAttribute('sctp');
  }

  // system - computed: true, optional: false, required: false
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }

  // threat - computed: true, optional: false, required: false
  public get threat() {
    return this.getStringAttribute('threat');
  }

  // traffic - computed: true, optional: false, required: false
  public get traffic() {
    return this.getStringAttribute('traffic');
  }

  // tunnel - computed: true, optional: false, required: false
  public get tunnel() {
    return this.getStringAttribute('tunnel');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // userid - computed: true, optional: false, required: false
  public get userid() {
    return this.getStringAttribute('userid');
  }

  // wildfire - computed: true, optional: false, required: false
  public get wildfire() {
    return this.getStringAttribute('wildfire');
  }
}
export interface DataScmSyslogServerProfileServers {
}

export function dataScmSyslogServerProfileServersToTerraform(struct?: DataScmSyslogServerProfileServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSyslogServerProfileServersToHclTerraform(struct?: DataScmSyslogServerProfileServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSyslogServerProfileServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSyslogServerProfileServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSyslogServerProfileServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // facility - computed: true, optional: false, required: false
  public get facility() {
    return this.getStringAttribute('facility');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }

  // transport - computed: true, optional: false, required: false
  public get transport() {
    return this.getStringAttribute('transport');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/data-sources/syslog_server_profile scm_syslog_server_profile}
*/
export class DataScmSyslogServerProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_syslog_server_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmSyslogServerProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmSyslogServerProfile to import
  * @param importFromId The id of the existing DataScmSyslogServerProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/data-sources/syslog_server_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmSyslogServerProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_syslog_server_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/data-sources/syslog_server_profile scm_syslog_server_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmSyslogServerProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmSyslogServerProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_syslog_server_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // format - computed: true, optional: false, required: false
  private _format = new DataScmSyslogServerProfileFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // servers - computed: true, optional: false, required: false
  private _servers = new DataScmSyslogServerProfileServersOutputReference(this, "servers");
  public get servers() {
    return this._servers;
  }

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
