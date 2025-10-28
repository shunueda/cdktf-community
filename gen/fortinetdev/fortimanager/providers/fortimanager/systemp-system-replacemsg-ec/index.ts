// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_replacemsg_ec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystempSystemReplacemsgEcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_replacemsg_ec#adom SystempSystemReplacemsgEc#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_replacemsg_ec#buffer SystempSystemReplacemsgEc#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_replacemsg_ec#devprof SystempSystemReplacemsgEc#devprof}
  */
  readonly devprof: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_replacemsg_ec#format SystempSystemReplacemsgEc#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_replacemsg_ec#header SystempSystemReplacemsgEc#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_replacemsg_ec#id SystempSystemReplacemsgEc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_replacemsg_ec#msg_type SystempSystemReplacemsgEc#msg_type}
  */
  readonly msgType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_replacemsg_ec#scopetype SystempSystemReplacemsgEc#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_replacemsg_ec fortimanager_systemp_system_replacemsg_ec}
*/
export class SystempSystemReplacemsgEc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_systemp_system_replacemsg_ec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystempSystemReplacemsgEc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystempSystemReplacemsgEc to import
  * @param importFromId The id of the existing SystempSystemReplacemsgEc that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_replacemsg_ec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystempSystemReplacemsgEc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_systemp_system_replacemsg_ec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_replacemsg_ec fortimanager_systemp_system_replacemsg_ec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystempSystemReplacemsgEcConfig
  */
  public constructor(scope: Construct, id: string, config: SystempSystemReplacemsgEcConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_systemp_system_replacemsg_ec',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._buffer = config.buffer;
    this._devprof = config.devprof;
    this._format = config.format;
    this._header = config.header;
    this._id = config.id;
    this._msgType = config.msgType;
    this._scopetype = config.scopetype;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // devprof - computed: false, optional: false, required: true
  private _devprof?: string; 
  public get devprof() {
    return this.getStringAttribute('devprof');
  }
  public set devprof(value: string) {
    this._devprof = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devprofInput() {
    return this._devprof;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // msg_type - computed: true, optional: true, required: false
  private _msgType?: string; 
  public get msgType() {
    return this.getStringAttribute('msg_type');
  }
  public set msgType(value: string) {
    this._msgType = value;
  }
  public resetMsgType() {
    this._msgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTypeInput() {
    return this._msgType;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      buffer: cdktf.stringToTerraform(this._buffer),
      devprof: cdktf.stringToTerraform(this._devprof),
      format: cdktf.stringToTerraform(this._format),
      header: cdktf.stringToTerraform(this._header),
      id: cdktf.stringToTerraform(this._id),
      msg_type: cdktf.stringToTerraform(this._msgType),
      scopetype: cdktf.stringToTerraform(this._scopetype),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      buffer: {
        value: cdktf.stringToHclTerraform(this._buffer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      devprof: {
        value: cdktf.stringToHclTerraform(this._devprof),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header: {
        value: cdktf.stringToHclTerraform(this._header),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msg_type: {
        value: cdktf.stringToHclTerraform(this._msgType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
