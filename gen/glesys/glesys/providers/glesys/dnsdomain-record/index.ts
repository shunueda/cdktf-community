// https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/dnsdomain_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsdomainRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Record data field. Ex. `127.0.0.1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/dnsdomain_record#data DnsdomainRecord#data}
  */
  readonly data: string;
  /**
  * Domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/dnsdomain_record#domain DnsdomainRecord#domain}
  */
  readonly domain: string;
  /**
  * Record host field. Ex. `www`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/dnsdomain_record#host DnsdomainRecord#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/dnsdomain_record#id DnsdomainRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Record TTL field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/dnsdomain_record#ttl DnsdomainRecord#ttl}
  */
  readonly ttl?: number;
  /**
  * Record type. Must be one of `SOA`, `A`, `AAAA`, `CAA`, `CNAME`, `MX`, `NS`, `TXT`, `SRV`, `URL` or `PTR`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/dnsdomain_record#type DnsdomainRecord#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/dnsdomain_record glesys_dnsdomain_record}
*/
export class DnsdomainRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "glesys_dnsdomain_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsdomainRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsdomainRecord to import
  * @param importFromId The id of the existing DnsdomainRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/dnsdomain_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsdomainRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "glesys_dnsdomain_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/dnsdomain_record glesys_dnsdomain_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsdomainRecordConfig
  */
  public constructor(scope: Construct, id: string, config: DnsdomainRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'glesys_dnsdomain_record',
      terraformGeneratorMetadata: {
        providerName: 'glesys',
        providerVersion: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._data = config.data;
    this._domain = config.domain;
    this._host = config.host;
    this._id = config.id;
    this._ttl = config.ttl;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: false, optional: false, required: true
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // recordid - computed: true, optional: false, required: false
  public get recordid() {
    return this.getNumberAttribute('recordid');
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data: cdktf.stringToTerraform(this._data),
      domain: cdktf.stringToTerraform(this._domain),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data: {
        value: cdktf.stringToHclTerraform(this._data),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
